import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEffect, useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
};

const STORAGE_KEY = 'jayca_inventory';

const DEFAULT_PRODUCTS: Product[] = [
  { id: 'P001', name: 'Short Bond Paper (A4)', quantity: 500, price: 185, category: 'Bond Paper' },
  { id: 'P002', name: 'Long Bond Paper (Legal)', quantity: 350, price: 210, category: 'Bond Paper' },
  { id: 'P003', name: 'Yellow Pad Paper', quantity: 120, price: 45, category: 'Pad Paper' },
  { id: 'P004', name: 'Colored Bond Paper (Assorted)', quantity: 80, price: 250, category: 'Bond Paper' },
  { id: 'P005', name: 'Intermediate Pad Paper', quantity: 200, price: 30, category: 'Pad Paper' },
  { id: 'P006', name: 'Specialty Cardstock A4', quantity: 15, price: 320, category: 'Specialty' },
  { id: 'P007', name: 'Photo Paper (Glossy A4)', quantity: 0, price: 280, category: 'Specialty' },
];

function getStockStatus(qty: number): { label: string; color: string; bg: string } {
  if (qty === 0) return { label: 'Out of Stock', color: '#DC2626', bg: '#DC262615' };
  if (qty <= 50) return { label: 'Low Stock', color: '#D97706', bg: '#D9770615' };
  return { label: 'In Stock', color: '#059669', bg: '#05966915' };
}

export default function InventoryScreen() {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const card = isDark ? '#1E293B' : '#FFFFFF';
  const inputBg = isDark ? '#334155' : '#F1F5F9';
  const textColor = isDark ? '#F1F5F9' : '#0F172A';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form fields
  const [formName, setFormName] = useState('');
  const [formQty, setFormQty] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formCategory, setFormCategory] = useState('Bond Paper');

  // Load data on mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProducts(JSON.parse(stored));
      } else {
        // First time — seed with defaults
        setProducts(DEFAULT_PRODUCTS);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
      }
    } catch {
      setProducts(DEFAULT_PRODUCTS);
    }
  };

  const saveProducts = async (updated: Product[]) => {
    setProducts(updated);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save inventory:', e);
    }
  };

  const resetForm = () => {
    setFormName('');
    setFormQty('');
    setFormPrice('');
    setFormCategory('Bond Paper');
    setEditingId(null);
    setShowForm(false);
  };

  const handleSave = () => {
    if (!formName.trim()) {
      if (Platform.OS === 'web') {
        alert('Please enter a product name.');
      } else {
        Alert.alert('Missing Name', 'Please enter a product name.');
      }
      return;
    }
    const qty = parseInt(formQty) || 0;
    const price = parseFloat(formPrice) || 0;

    if (editingId) {
      // Update existing
      const updated = products.map(p =>
        p.id === editingId ? { ...p, name: formName.trim(), quantity: qty, price, category: formCategory } : p
      );
      saveProducts(updated);
    } else {
      // Add new
      const newProduct: Product = {
        id: 'P' + String(Date.now()).slice(-4),
        name: formName.trim(),
        quantity: qty,
        price,
        category: formCategory,
      };
      saveProducts([...products, newProduct]);
    }
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormName(product.name);
    setFormQty(String(product.quantity));
    setFormPrice(String(product.price));
    setFormCategory(product.category);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    const doDelete = () => saveProducts(products.filter(p => p.id !== id));
    if (Platform.OS === 'web') {
      if (confirm('Delete this product?')) doDelete();
    } else {
      Alert.alert('Delete Product', 'Are you sure?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: doDelete },
      ]);
    }
  };

  const handleReset = () => {
    const doReset = () => saveProducts(DEFAULT_PRODUCTS);
    if (Platform.OS === 'web') {
      if (confirm('Reset inventory to defaults?')) doReset();
    } else {
      Alert.alert('Reset Inventory', 'This will restore all default products. Continue?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', style: 'destructive', onPress: doReset },
      ]);
    }
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = products.reduce((s, p) => s + p.quantity, 0);
  const lowStock = products.filter(p => p.quantity > 0 && p.quantity <= 50).length;
  const outOfStock = products.filter(p => p.quantity === 0).length;

  const CATEGORIES = ['Bond Paper', 'Pad Paper', 'Specialty'];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Summary Cards */}
      <View style={styles.summaryRow}>
        <View style={[styles.summaryCard, { backgroundColor: '#05966915' }]}>
          <Text style={[styles.summaryValue, { color: '#059669' }]}>{totalItems}</Text>
          <Text style={[styles.summaryLabel, { color: subtextColor }]}>Total Items</Text>
        </View>
        <View style={[styles.summaryCard, { backgroundColor: '#D9770615' }]}>
          <Text style={[styles.summaryValue, { color: '#D97706' }]}>{lowStock}</Text>
          <Text style={[styles.summaryLabel, { color: subtextColor }]}>Low Stock</Text>
        </View>
        <View style={[styles.summaryCard, { backgroundColor: '#DC262615' }]}>
          <Text style={[styles.summaryValue, { color: '#DC2626' }]}>{outOfStock}</Text>
          <Text style={[styles.summaryLabel, { color: subtextColor }]}>Out of Stock</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchRow]}>
        <TextInput
          style={[styles.searchInput, { backgroundColor: inputBg, color: textColor }]}
          placeholder="Search products..."
          placeholderTextColor={subtextColor}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={[styles.addBtn, { backgroundColor: '#2563EB' }]}
          onPress={() => { resetForm(); setShowForm(true); }}
        >
          <Text style={styles.addBtnText}>+ Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addBtn, { backgroundColor: '#D97706' }]}
          onPress={handleReset}
        >
          <Text style={styles.addBtnText}>↺ Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Add / Edit Form */}
      {showForm && (
        <View style={[styles.formCard, { backgroundColor: card }]}>
          <Text style={[styles.formTitle, { color: textColor }]}>
            {editingId ? '✏️ Edit Product' : '➕ New Product'}
          </Text>

          <Text style={[styles.fieldLabel, { color: subtextColor }]}>Product Name</Text>
          <TextInput
            style={[styles.input, { backgroundColor: inputBg, color: textColor }]}
            value={formName}
            onChangeText={setFormName}
            placeholder="e.g. Short Bond Paper (A4)"
            placeholderTextColor={subtextColor}
          />

          <View style={styles.formRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.fieldLabel, { color: subtextColor }]}>Quantity</Text>
              <TextInput
                style={[styles.input, { backgroundColor: inputBg, color: textColor }]}
                value={formQty}
                onChangeText={setFormQty}
                placeholder="0"
                placeholderTextColor={subtextColor}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.fieldLabel, { color: subtextColor }]}>Price (₱)</Text>
              <TextInput
                style={[styles.input, { backgroundColor: inputBg, color: textColor }]}
                value={formPrice}
                onChangeText={setFormPrice}
                placeholder="0.00"
                placeholderTextColor={subtextColor}
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={[styles.fieldLabel, { color: subtextColor }]}>Category</Text>
          <View style={styles.categoryRow}>
            {CATEGORIES.map(cat => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryChip,
                  {
                    backgroundColor: formCategory === cat ? '#2563EB' : inputBg,
                  },
                ]}
                onPress={() => setFormCategory(cat)}
              >
                <Text style={{
                  color: formCategory === cat ? '#fff' : textColor,
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity style={[styles.formBtn, { backgroundColor: '#64748B' }]} onPress={resetForm}>
              <Text style={styles.formBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.formBtn, { backgroundColor: '#059669' }]} onPress={handleSave}>
              <Text style={styles.formBtnText}>{editingId ? 'Update' : 'Save'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Product List */}
      <Text style={[styles.sectionTitle, { color: isDark ? '#CBD5E1' : '#334155' }]}>
        Products ({filtered.length})
      </Text>
      {filtered.map(product => {
        const stock = getStockStatus(product.quantity);
        return (
          <View key={product.id} style={[styles.productCard, { backgroundColor: card }]}>
            <View style={styles.productMain}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.productName, { color: textColor }]}>{product.name}</Text>
                <Text style={[styles.productMeta, { color: subtextColor }]}>
                  {product.category}  ·  ₱{product.price.toFixed(2)}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[styles.productQty, { color: textColor }]}>{product.quantity}</Text>
                <View style={[styles.stockBadge, { backgroundColor: stock.bg }]}>
                  <Text style={[styles.stockText, { color: stock.color }]}>{stock.label}</Text>
                </View>
              </View>
            </View>
            <View style={styles.productActions}>
              <TouchableOpacity
                style={[styles.smallBtn, { backgroundColor: '#2563EB15' }]}
                onPress={() => handleEdit(product)}
              >
                <Text style={{ color: '#2563EB', fontSize: 12, fontWeight: '600' }}>✏️ Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.smallBtn, { backgroundColor: '#DC262615' }]}
                onPress={() => handleDelete(product.id)}
              >
                <Text style={{ color: '#DC2626', fontSize: 12, fontWeight: '600' }}>🗑️ Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {filtered.length === 0 && (
        <View style={[styles.emptyState, { backgroundColor: card }]}>
          <Text style={{ fontSize: 40, marginBottom: 8 }}>📭</Text>
          <Text style={[styles.emptyText, { color: subtextColor }]}>
            {search ? 'No products match your search' : 'No products yet. Add your first item!'}
          </Text>
        </View>
      )}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, maxWidth: 600, alignSelf: 'center' as any, width: '100%' as any },

  summaryRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  summaryCard: { flex: 1, borderRadius: 12, padding: 14, alignItems: 'center' },
  summaryValue: { fontSize: 24, fontWeight: '800' },
  summaryLabel: { fontSize: 10, marginTop: 2, fontWeight: '600' },

  searchRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  searchInput: {
    flex: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 14,
  },
  addBtn: { borderRadius: 12, paddingHorizontal: 18, justifyContent: 'center' },
  addBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },

  formCard: {
    borderRadius: 16, padding: 18, marginBottom: 16,
    borderWidth: 1, borderColor: '#E2E8F020',
  },
  formTitle: { fontSize: 16, fontWeight: '700', marginBottom: 14 },
  fieldLabel: { fontSize: 12, fontWeight: '600', marginBottom: 6 },
  input: {
    borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10,
    fontSize: 14, marginBottom: 12,
  },
  formRow: { flexDirection: 'row' },
  categoryRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  categoryChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 },
  formActions: { flexDirection: 'row', gap: 10 },
  formBtn: { flex: 1, borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  formBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },

  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },

  productCard: {
    borderRadius: 14, padding: 14, marginBottom: 10,
    borderWidth: 1, borderColor: '#E2E8F020',
  },
  productMain: { flexDirection: 'row', alignItems: 'center' },
  productName: { fontSize: 14, fontWeight: '600', marginBottom: 2 },
  productMeta: { fontSize: 12 },
  productQty: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  stockBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  stockText: { fontSize: 10, fontWeight: '700' },
  productActions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  smallBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },

  emptyState: { borderRadius: 16, padding: 32, alignItems: 'center' },
  emptyText: { fontSize: 14, textAlign: 'center' },
});
