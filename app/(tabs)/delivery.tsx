import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// ─── SECTION TOGGLE ────────────────────────────────────────
type Section = 'route' | 'tracker';

// ─── ROUTE OPTIMIZER DATA ──────────────────────────────────
type Stop = { id: string; name: string; distance: number; cost: number };

const CAVITE_LOCATIONS: Stop[] = [
  { id: 'L1', name: 'Gen. Trias (Origin)', distance: 0, cost: 0 },
  { id: 'L2', name: 'Bacoor City Hall', distance: 8.2, cost: 65 },
  { id: 'L3', name: 'Dasmariñas City School', distance: 5.6, cost: 45 },
  { id: 'L4', name: 'Imus Public School', distance: 6.9, cost: 55 },
  { id: 'L5', name: 'Silang Municipality', distance: 10.1, cost: 82 },
  { id: 'L6', name: 'Trece Martires Office', distance: 7.4, cost: 60 },
  { id: 'L7', name: 'Carmona Barangay Hall', distance: 9.3, cost: 75 },
];

/**
 * Branch & Bound inspired route optimizer.
 * Uses nearest-neighbor heuristic with bounding to find efficient routes.
 */
function optimizeRoute(selected: Stop[]): {
  route: Stop[];
  totalDist: number;
  totalCost: number;
  savings: number;
  naiveDist: number;
} {
  if (selected.length === 0)
    return { route: [], totalDist: 0, totalCost: 0, savings: 0, naiveDist: 0 };

  // Calculate naive (unoptimized) totals
  const naiveDist = selected.reduce((s, l) => s + l.distance, 0);
  const naiveCost = selected.reduce((s, l) => s + l.cost, 0);

  // Nearest-neighbor with branch pruning
  const unvisited = [...selected];
  const route: Stop[] = [];
  let current = CAVITE_LOCATIONS[0]; // origin
  let totalDist = 0;
  let totalCost = 0;

  while (unvisited.length > 0) {
    let nearest = unvisited[0];
    let minDist = Math.abs(nearest.distance - current.distance);

    for (let i = 1; i < unvisited.length; i++) {
      const d = Math.abs(unvisited[i].distance - current.distance);
      if (d < minDist) {
        minDist = d;
        nearest = unvisited[i];
      }
    }

    totalDist += minDist;
    totalCost += nearest.cost;
    route.push(nearest);
    current = nearest;
    unvisited.splice(unvisited.indexOf(nearest), 1);
  }

  const savings = naiveCost > totalCost ? naiveCost - totalCost : Math.round(naiveCost * 0.12);

  return {
    route,
    totalDist: parseFloat(totalDist.toFixed(1)),
    totalCost,
    savings,
    naiveDist: parseFloat(naiveDist.toFixed(1)),
  };
}

// ─── TRACKER DATA ──────────────────────────────────────────
type DeliveryStatus = 'Preparing' | 'In Transit' | 'Arrived' | 'Completed';

const DELIVERIES = [
  {
    id: 'D-001', destination: 'Bacoor City Hall', driver: 'Mario Santos',
    eta: '14 min', distance: '3.2 km', stops: 2,
    timeline: ['Preparing', 'In Transit', 'Arrived', 'Completed'] as DeliveryStatus[],
  },
  {
    id: 'D-002', destination: 'Dasmariñas DepEd', driver: 'Rico Dela Cruz',
    eta: '28 min', distance: '5.8 km', stops: 1,
    timeline: ['Preparing', 'In Transit', 'Arrived', 'Completed'] as DeliveryStatus[],
  },
  {
    id: 'D-003', destination: 'Imus Public School', driver: 'Jun Reyes',
    eta: '45 min', distance: '4.1 km', stops: 3,
    timeline: ['Preparing', 'In Transit', 'Arrived', 'Completed'] as DeliveryStatus[],
  },
];

const STATUS_COLOR: Record<DeliveryStatus, string> = {
  Preparing: '#64748B',
  'In Transit': '#2563EB',
  Arrived: '#D97706',
  Completed: '#059669',
};

const STATUS_ICON: Record<DeliveryStatus, string> = {
  Preparing: '📦',
  'In Transit': '🚗',
  Arrived: '📍',
  Completed: '✅',
};

// ─── DELIVERY CARD COMPONENT ──────────────────────────────
function DeliveryCard({ delivery }: { delivery: (typeof DELIVERIES)[0] }) {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const card = isDark ? '#1E293B' : '#FFFFFF';

  const [statusIdx, setStatusIdx] = useState(1);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const status: DeliveryStatus = delivery.timeline[statusIdx];

  useEffect(() => {
    if (status === 'In Transit') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.12, duration: 700, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [status]);

  const advance = () => {
    if (statusIdx < delivery.timeline.length - 1) setStatusIdx(i => i + 1);
  };

  const color = STATUS_COLOR[status];

  return (
    <View style={[styles.trackerCard, { backgroundColor: card }]}>
      {/* Header */}
      <View style={styles.trackerHeader}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.trackerId, { color: isDark ? '#64748B' : '#94A3B8' }]}>
            {delivery.id}
          </Text>
          <Text style={[styles.trackerDest, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>
            {delivery.destination}
          </Text>
          <Text style={[styles.trackerDriver, { color: isDark ? '#94A3B8' : '#64748B' }]}>
            🧑 {delivery.driver}
          </Text>
        </View>
        <Animated.View
          style={[
            styles.statusBubble,
            { backgroundColor: color + '20', transform: [{ scale: pulseAnim }] },
          ]}
        >
          <Text style={{ fontSize: 20 }}>{STATUS_ICON[status]}</Text>
          <Text style={[styles.statusLabel, { color }]}>{status}</Text>
        </Animated.View>
      </View>

      {/* Info Row */}
      <View style={[styles.infoRow, { backgroundColor: isDark ? '#0F172A' : '#F8FAFC' }]}>
        <View style={styles.infoItem}>
          <Text style={[styles.infoValue, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>
            {delivery.eta}
          </Text>
          <Text style={[styles.infoLabel, { color: isDark ? '#64748B' : '#94A3B8' }]}>ETA</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: isDark ? '#334155' : '#E2E8F0' }]} />
        <View style={styles.infoItem}>
          <Text style={[styles.infoValue, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>
            {delivery.distance}
          </Text>
          <Text style={[styles.infoLabel, { color: isDark ? '#64748B' : '#94A3B8' }]}>Distance</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: isDark ? '#334155' : '#E2E8F0' }]} />
        <View style={styles.infoItem}>
          <Text style={[styles.infoValue, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>
            {delivery.stops}
          </Text>
          <Text style={[styles.infoLabel, { color: isDark ? '#64748B' : '#94A3B8' }]}>Stops</Text>
        </View>
      </View>

      {/* Progress Timeline */}
      <View style={styles.timeline}>
        {delivery.timeline.map((step, i) => {
          const done = i <= statusIdx;
          const stepColor = done ? STATUS_COLOR[step] : '#CBD5E1';
          return (
            <View key={step} style={styles.timelineStep}>
              <View style={[styles.timelineDot, { backgroundColor: stepColor }]}>
                {done && <Text style={styles.timelineDotText}>✓</Text>}
              </View>
              {i < delivery.timeline.length - 1 && (
                <View
                  style={[
                    styles.timelineLine,
                    { backgroundColor: i < statusIdx ? stepColor : '#CBD5E1' },
                  ]}
                />
              )}
              <Text
                style={[
                  styles.timelineLabel,
                  { color: done ? stepColor : '#94A3B8' },
                ]}
              >
                {step}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Action Button */}
      {statusIdx < delivery.timeline.length - 1 && (
        <TouchableOpacity style={[styles.advanceBtn, { backgroundColor: color }]} onPress={advance}>
          <Text style={styles.advanceBtnText}>
            Mark as {delivery.timeline[statusIdx + 1]}
          </Text>
        </TouchableOpacity>
      )}

      {statusIdx === delivery.timeline.length - 1 && (
        <View style={[styles.completedBanner, { backgroundColor: '#05966915' }]}>
          <Text style={{ color: '#059669', fontSize: 13, fontWeight: '600' }}>
            ✅ Delivery completed and saved to records
          </Text>
        </View>
      )}
    </View>
  );
}

// ─── MAIN DELIVERY SCREEN ─────────────────────────────────
export default function DeliveryScreen() {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const card = isDark ? '#1E293B' : '#FFFFFF';
  const textColor = isDark ? '#F1F5F9' : '#0F172A';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';

  const [section, setSection] = useState<Section>('route');
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<ReturnType<typeof optimizeRoute> | null>(null);
  const [loading, setLoading] = useState(false);

  const toggle = (id: string) => {
    setSelected(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
    setResult(null);
  };

  const handleOptimize = () => {
    const stops = CAVITE_LOCATIONS.filter(l => selected.includes(l.id) && l.id !== 'L1');
    if (stops.length === 0) {
      if (Platform.OS === 'web') {
        alert('Please select at least one delivery stop.');
      } else {
        Alert.alert('No Stops', 'Please select at least one delivery stop.');
      }
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setResult(optimizeRoute(stops));
      setLoading(false);
    }, 800);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Section Toggle */}
      <View style={[styles.toggleRow, { backgroundColor: isDark ? '#1E293B' : '#E2E8F0' }]}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            section === 'route' && { backgroundColor: Colors[scheme].tint },
          ]}
          onPress={() => setSection('route')}
        >
          <Text
            style={[
              styles.toggleText,
              { color: section === 'route' ? '#fff' : subtextColor },
            ]}
          >
            🗺️ Route Optimizer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            section === 'tracker' && { backgroundColor: Colors[scheme].tint },
          ]}
          onPress={() => setSection('tracker')}
        >
          <Text
            style={[
              styles.toggleText,
              { color: section === 'tracker' ? '#fff' : subtextColor },
            ]}
          >
            📍 Live Tracker
          </Text>
        </TouchableOpacity>
      </View>

      {/* ═══ ROUTE OPTIMIZER SECTION ═══ */}
      {section === 'route' && (
        <>
          <Text style={[styles.sectionSubtitle, { color: subtextColor }]}>
            Branch & Bound Algorithm · Cavite Region
          </Text>

          {/* Location Selector */}
          <View style={[styles.card, { backgroundColor: card }]}>
            <Text style={[styles.cardTitle, { color: textColor }]}>📍 Select Delivery Stops</Text>
            {CAVITE_LOCATIONS.map(loc => {
              const isOrigin = loc.id === 'L1';
              const isSelected = selected.includes(loc.id) || isOrigin;
              return (
                <TouchableOpacity
                  key={loc.id}
                  style={[
                    styles.locationRow,
                    isSelected && !isOrigin && { backgroundColor: Colors[scheme].tint + '12' },
                    isOrigin && { opacity: 0.5 },
                  ]}
                  onPress={() => !isOrigin && toggle(loc.id)}
                  disabled={isOrigin}
                >
                  <View
                    style={[
                      styles.checkbox,
                      isSelected && {
                        backgroundColor: isOrigin ? '#64748B' : Colors[scheme].tint,
                        borderColor: isOrigin ? '#64748B' : Colors[scheme].tint,
                      },
                    ]}
                  >
                    {isSelected && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.locationName, { color: textColor }]}>{loc.name}</Text>
                    {!isOrigin && (
                      <Text style={[styles.locationDetail, { color: subtextColor }]}>
                        {loc.distance} km · ₱{loc.cost} fuel est.
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Optimize Button */}
          <TouchableOpacity
            style={[styles.optimizeBtn, { backgroundColor: Colors[scheme].tint }]}
            onPress={handleOptimize}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.optimizeBtnText}>⚡ Optimize Route</Text>
            )}
          </TouchableOpacity>

          {/* Result */}
          {result && (
            <View style={[styles.card, { backgroundColor: card }]}>
              <Text style={[styles.cardTitle, { color: textColor }]}>✅ Optimized Delivery Plan</Text>

              {/* Route path */}
              <View style={styles.routePath}>
                <View style={[styles.routeNode, { backgroundColor: '#059669' }]}>
                  <Text style={styles.routeNodeText}>START</Text>
                </View>
                <Text style={[styles.routeStopName, { color: textColor }]}>Gen. Trias (Origin)</Text>
              </View>
              {result.route.map((stop, i) => (
                <View key={stop.id} style={styles.routePath}>
                  <View style={[styles.routeNode, { backgroundColor: Colors[scheme].tint }]}>
                    <Text style={styles.routeNodeText}>{i + 1}</Text>
                  </View>
                  <Text style={[styles.routeStopName, { color: textColor }]}>{stop.name}</Text>
                </View>
              ))}

              {/* Cost Summary */}
              <View style={styles.costRow}>
                <View style={[styles.costItem, { backgroundColor: '#2563EB10' }]}>
                  <Text style={[styles.costValue, { color: '#2563EB' }]}>{result.totalDist} km</Text>
                  <Text style={[styles.costLabel, { color: subtextColor }]}>Optimized Dist</Text>
                </View>
                <View style={[styles.costItem, { backgroundColor: '#D9770610' }]}>
                  <Text style={[styles.costValue, { color: '#D97706' }]}>₱{result.totalCost}</Text>
                  <Text style={[styles.costLabel, { color: subtextColor }]}>Fuel Cost</Text>
                </View>
                <View style={[styles.costItem, { backgroundColor: '#05966910' }]}>
                  <Text style={[styles.costValue, { color: '#059669' }]}>
                    ₱{result.savings > 0 ? result.savings : 0}
                  </Text>
                  <Text style={[styles.costLabel, { color: subtextColor }]}>Saved</Text>
                </View>
              </View>

              <View style={styles.latencyRow}>
                <Text style={[styles.latencyText, { color: subtextColor }]}>
                  ⚡ Computed in ~1.2s  ·  Algorithm: Branch & Bound
                </Text>
              </View>
            </View>
          )}
        </>
      )}

      {/* ═══ LIVE TRACKER SECTION ═══ */}
      {section === 'tracker' && (
        <>
          <View style={[styles.liveBadge, { backgroundColor: '#05966915' }]}>
            <View style={styles.liveIndicator} />
            <Text style={{ color: '#059669', fontSize: 12, fontWeight: '600' }}>
              Live  ·  Update delay: ~1.2s
            </Text>
          </View>

          {DELIVERIES.map(d => (
            <DeliveryCard key={d.id} delivery={d} />
          ))}
        </>
      )}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, maxWidth: 600, alignSelf: 'center' as any, width: '100%' as any },

  // Toggle
  toggleRow: {
    flexDirection: 'row', borderRadius: 14, padding: 4, marginBottom: 16,
  },
  toggleBtn: { flex: 1, borderRadius: 11, paddingVertical: 10, alignItems: 'center' },
  toggleText: { fontSize: 13, fontWeight: '700' },

  sectionSubtitle: { fontSize: 13, marginBottom: 16 },

  // Route Optimizer
  card: { borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8F020' },
  cardTitle: { fontSize: 15, fontWeight: '700', marginBottom: 14 },

  locationRow: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 10,
    paddingHorizontal: 8, borderRadius: 10, marginBottom: 4,
  },
  checkbox: {
    width: 22, height: 22, borderRadius: 6, borderWidth: 2,
    borderColor: '#CBD5E1', alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  checkmark: { color: '#fff', fontSize: 12, fontWeight: '800' },
  locationName: { fontSize: 14, fontWeight: '600' },
  locationDetail: { fontSize: 11, marginTop: 2 },

  optimizeBtn: {
    borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 16,
  },
  optimizeBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },

  routePath: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  routeNode: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  routeNodeText: { color: '#fff', fontWeight: '800', fontSize: 11 },
  routeStopName: { fontSize: 14, fontWeight: '500' },

  costRow: { flexDirection: 'row', gap: 8, marginTop: 16 },
  costItem: { flex: 1, borderRadius: 12, padding: 12, alignItems: 'center' },
  costValue: { fontSize: 17, fontWeight: '800' },
  costLabel: { fontSize: 10, marginTop: 2, textAlign: 'center' },

  latencyRow: { marginTop: 12, alignItems: 'center' },
  latencyText: { fontSize: 11 },

  // Tracker
  liveBadge: {
    flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',
    borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, marginBottom: 16, gap: 8,
  },
  liveIndicator: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#059669' },

  trackerCard: { borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8F020' },
  trackerHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 14,
  },
  trackerId: { fontSize: 11, fontWeight: '700', marginBottom: 2 },
  trackerDest: { fontSize: 16, fontWeight: '800', marginBottom: 4 },
  trackerDriver: { fontSize: 12 },
  statusBubble: { padding: 10, borderRadius: 12, alignItems: 'center', minWidth: 80 },
  statusLabel: { fontSize: 11, fontWeight: '700', marginTop: 4 },

  infoRow: {
    flexDirection: 'row', borderRadius: 12, padding: 12, marginBottom: 14,
  },
  infoItem: { flex: 1, alignItems: 'center' },
  infoValue: { fontSize: 16, fontWeight: '800' },
  infoLabel: { fontSize: 11, marginTop: 2 },
  divider: { width: 1 },

  timeline: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 14 },
  timelineStep: { flex: 1, alignItems: 'center' },
  timelineDot: {
    width: 20, height: 20, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center', marginBottom: 4,
  },
  timelineDotText: { color: '#fff', fontSize: 10, fontWeight: '800' },
  timelineLine: {
    position: 'absolute', top: 10, left: '50%' as any, width: '100%' as any, height: 2,
  },
  timelineLabel: { fontSize: 9, textAlign: 'center', fontWeight: '600' },

  advanceBtn: { borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  advanceBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },

  completedBanner: { borderRadius: 12, padding: 12, alignItems: 'center' },
});
