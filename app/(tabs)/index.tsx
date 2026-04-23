import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Product = { id: string; name: string; quantity: number; price: number; category: string };

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning ☀️';
  if (h < 17) return 'Good afternoon 🌤️';
  return 'Good evening 🌙';
}

export default function DashboardScreen() {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const card = isDark ? '#1E293B' : '#FFFFFF';

  const [totalItems, setTotalItems] = useState(0);
  const [lowStock, setLowStock] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [inventoryValue, setInventoryValue] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  // Reload data every time this tab gets focus
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const stored = await AsyncStorage.getItem('jayca_inventory');
          if (stored) {
            const items: Product[] = JSON.parse(stored);
            setProducts(items);
            setProductCount(items.length);
            setTotalItems(items.reduce((s, p) => s + p.quantity, 0));
            setLowStock(items.filter(p => p.quantity > 0 && p.quantity <= 50).length);
            setOutOfStock(items.filter(p => p.quantity === 0).length);
            setInventoryValue(items.reduce((s, p) => s + p.quantity * p.price, 0));
          }
        } catch {}
      })();
    }, [])
  );

  const STATS = [
    { label: 'Total Products', value: String(productCount), icon: '📦', color: '#2563EB' },
    { label: 'Items in Stock', value: String(totalItems), icon: '🏷️', color: '#059669' },
    { label: 'Low Stock Alert', value: String(lowStock), icon: '⚠️', color: '#D97706' },
    { label: 'Out of Stock', value: String(outOfStock), icon: '🚫', color: '#DC2626' },
  ];

  // Show low/out-of-stock items as alerts
  const alertItems = products.filter(p => p.quantity <= 50);

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
            {getGreeting()}
          </Text>
          <Text style={[styles.title, { color: isDark ? '#F8FAFC' : '#0F172A' }]}>
            JayCa Supplies
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? '#64748B' : '#94A3B8' }]}>
            Bond Paper Supplier · Gen. Trias, Cavite
          </Text>
        </View>
        <View style={[styles.avatar, { backgroundColor: Colors[scheme].tint }]}>
          <Text style={styles.avatarText}>JC</Text>
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {STATS.map(s => (
          <View key={s.label} style={[styles.statCard, { backgroundColor: card }]}>
            <Text style={styles.statIcon}>{s.icon}</Text>
            <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
            <Text style={[styles.statLabel, { color: isDark ? '#94A3B8' : '#64748B' }]}>
              {s.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Inventory Value */}
      <View style={[styles.valueCard, { backgroundColor: card }]}>
        <Text style={[styles.valueLabel, { color: isDark ? '#94A3B8' : '#64748B' }]}>
          💰 Total Inventory Value
        </Text>
        <Text style={[styles.valueAmount, { color: '#059669' }]}>
          ₱{inventoryValue.toLocaleString()}
        </Text>
      </View>

      {/* Quick Actions */}
      <Text style={[styles.sectionTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
        Quick Actions
      </Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#059669' }]} onPress={() => router.push('/(tabs)/inventory')}>
          <Text style={styles.actionIcon}>📦</Text>
          <Text style={styles.actionLabel}>Manage Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#2563EB' }]} onPress={() => router.push('/(tabs)/delivery')}>
            <Text style={styles.actionIcon}>🗺️</Text>
            <Text style={styles.actionLabel}>Optimize Route</Text>
          </TouchableOpacity>
      </View>

      {/* Stock Alerts */}
      {alertItems.length > 0 && (
        <>
          <Text style={[styles.sectionTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
            ⚠️ Stock Alerts
          </Text>
          {alertItems.map(p => {
            const isOut = p.quantity === 0;
            return (
              <View key={p.id} style={[styles.alertCard, { backgroundColor: card }]}>
                <View style={[styles.alertDot, { backgroundColor: isOut ? '#DC2626' : '#D97706' }]} />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.alertName, { color: isDark ? '#F1F5F9' : '#1E293B' }]}>
                    {p.name}
                  </Text>
                  <Text style={[styles.alertMeta, { color: isDark ? '#64748B' : '#94A3B8' }]}>
                    {p.category} · ₱{p.price.toFixed(2)}
                  </Text>
                </View>
                <View style={[styles.alertBadge, { backgroundColor: isOut ? '#DC262615' : '#D9770615' }]}>
                  <Text style={{ color: isOut ? '#DC2626' : '#D97706', fontSize: 11, fontWeight: '700' }}>
                    {isOut ? 'Out of Stock' : `${p.quantity} left`}
                  </Text>
                </View>
              </View>
            );
          })}
        </>
      )}

      {/* System Info */}
      <View style={[styles.sysCard, { backgroundColor: card }]}>
        <Text style={[styles.sysTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
          ℹ️ System Information
        </Text>
        <Text style={[styles.sysText, { color: isDark ? '#94A3B8' : '#64748B' }]}>
          Algorithm: Branch {'&'} Bound (Design 2){'\n'}
          Region: Cavite (Gen. Trias, Bacoor, Dasmariñas, Imus, Silang){'\n'}
          Data Latency: ~1.2 seconds{'\n'}
          Storage: AsyncStorage (Local)
        </Text>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, maxWidth: 600, alignSelf: 'center' as any, width: '100%' as any },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 12 },
  greeting: { fontSize: 14 },
  title: { fontSize: 26, fontWeight: '800' },
  subtitle: { fontSize: 12, marginTop: 2 },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 16 },
  statCard: { minWidth: 140, flex: 1, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: '#E2E8F020' },
  statIcon: { fontSize: 22, marginBottom: 6 },
  statValue: { fontSize: 28, fontWeight: '800' },
  statLabel: { fontSize: 12, marginTop: 4 },
  valueCard: { borderRadius: 14, padding: 18, marginBottom: 24, borderWidth: 1, borderColor: '#E2E8F020', alignItems: 'center' },
  valueLabel: { fontSize: 13, fontWeight: '600', marginBottom: 4 },
  valueAmount: { fontSize: 30, fontWeight: '800' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  actionsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  actionBtn: { flex: 1, borderRadius: 14, padding: 16, alignItems: 'center' },
  actionIcon: { fontSize: 24, marginBottom: 6 },
  actionLabel: { color: '#fff', fontWeight: '600', fontSize: 12, textAlign: 'center' },
  alertCard: { flexDirection: 'row', alignItems: 'center', borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#E2E8F020' },
  alertDot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  alertName: { fontSize: 14, fontWeight: '600', marginBottom: 2 },
  alertMeta: { fontSize: 12 },
  alertBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  sysCard: { borderRadius: 14, padding: 16, marginTop: 8, borderWidth: 1, borderColor: '#E2E8F020' },
  sysTitle: { fontSize: 14, fontWeight: '700', marginBottom: 8 },
  sysText: { fontSize: 12, lineHeight: 20 },
});
