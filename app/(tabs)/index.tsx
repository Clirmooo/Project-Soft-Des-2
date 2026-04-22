import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const STATS = [
  { label: 'Active Deliveries', value: '4', icon: '🚚', color: '#2563EB' },
  { label: 'Pending Orders', value: '7', icon: '⏳', color: '#D97706' },
  { label: 'Items in Stock', value: '132', icon: '📦', color: '#059669' },
  { label: 'Routes Saved', value: '12', icon: '🗺️', color: '#7C3AED' },
];

const RECENT_DELIVERIES = [
  { id: 'D-001', destination: 'Bacoor City Hall', distance: '3.2 km', status: 'In Transit', color: '#2563EB' },
  { id: 'D-002', destination: 'Dasmariñas DepEd', distance: '5.8 km', status: 'Completed', color: '#059669' },
  { id: 'D-003', destination: 'Imus Public School', distance: '4.1 km', status: 'Pending', color: '#D97706' },
];

export default function DashboardScreen() {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const card = isDark ? '#1E293B' : '#FFFFFF';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: isDark ? '#94A3B8' : '#64748B' }]}>
            Good morning 👋
          </Text>
          <Text style={[styles.title, { color: isDark ? '#F8FAFC' : '#0F172A' }]}>
            JayCa Supplies
          </Text>
        </View>
        <View style={[styles.avatar, { backgroundColor: Colors[scheme].tint }]}>
          <Text style={styles.avatarText}>JC</Text>
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {STATS.map((s) => (
          <View
            key={s.label}
            style={[styles.statCard, { backgroundColor: card }]}
          >
            <Text style={styles.statIcon}>{s.icon}</Text>
            <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
            <Text style={[styles.statLabel, { color: isDark ? '#94A3B8' : '#64748B' }]}>
              {s.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <Text style={[styles.sectionTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
        Quick Actions
      </Text>
      <View style={styles.actionsRow}>
        <Link href="/(tabs)/inventory" asChild>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#059669' }]}>
            <Text style={styles.actionIcon}>📦</Text>
            <Text style={styles.actionLabel}>Manage Inventory</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/delivery" asChild>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#2563EB' }]}>
            <Text style={styles.actionIcon}>🗺️</Text>
            <Text style={styles.actionLabel}>Plan Route</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/delivery" asChild>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#7C3AED' }]}>
            <Text style={styles.actionIcon}>📍</Text>
            <Text style={styles.actionLabel}>Track Delivery</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Recent Deliveries */}
      <Text style={[styles.sectionTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
        Recent Deliveries
      </Text>
      {RECENT_DELIVERIES.map((d) => (
        <View
          key={d.id}
          style={[styles.deliveryCard, { backgroundColor: card }]}
        >
          <View style={[styles.deliveryDot, { backgroundColor: d.color }]} />
          <View style={styles.deliveryInfo}>
            <Text style={[styles.deliveryId, { color: isDark ? '#64748B' : '#94A3B8' }]}>{d.id}</Text>
            <Text style={[styles.deliveryDest, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>{d.destination}</Text>
            <Text style={[styles.deliveryDist, { color: isDark ? '#64748B' : '#94A3B8' }]}>{d.distance}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: d.color + '20' }]}>
            <Text style={[styles.statusText, { color: d.color }]}>{d.status}</Text>
          </View>
        </View>
      ))}

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, maxWidth: 600, alignSelf: 'center' as any, width: '100%' as any },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 24, marginTop: 12,
  },
  greeting: { fontSize: 14 },
  title: { fontSize: 26, fontWeight: '800' },
  avatar: {
    width: 44, height: 44, borderRadius: 22,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontWeight: '700', fontSize: 15 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  statCard: {
    width: (width - 52) / 2, minWidth: 140, flex: 1,
    borderRadius: 14, padding: 16,
    borderWidth: 1, borderColor: '#E2E8F020',
  },
  statIcon: { fontSize: 22, marginBottom: 6 },
  statValue: { fontSize: 28, fontWeight: '800' },
  statLabel: { fontSize: 12, marginTop: 4 },

  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },

  actionsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  actionBtn: {
    flex: 1, borderRadius: 14, padding: 16, alignItems: 'center',
    borderWidth: 1, borderColor: '#FFFFFF30',
  },
  actionIcon: { fontSize: 24, marginBottom: 6 },
  actionLabel: { color: '#fff', fontWeight: '600', fontSize: 12, textAlign: 'center' },

  deliveryCard: {
    flexDirection: 'row', alignItems: 'center', borderRadius: 14, padding: 14,
    marginBottom: 10,
    borderWidth: 1, borderColor: '#E2E8F020',
  },
  deliveryDot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  deliveryInfo: { flex: 1 },
  deliveryId: { fontSize: 11, fontWeight: '600' },
  deliveryDest: { fontSize: 14, fontWeight: '600', marginVertical: 2 },
  deliveryDist: { fontSize: 12 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  statusText: { fontSize: 11, fontWeight: '700' },
});
