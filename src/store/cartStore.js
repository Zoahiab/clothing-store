import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  addItem: (product, size) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.id === product.id && i.size === size
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            size,
            quantity: 1,
          },
        ],
      };
    }),

  increase: (id, size) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id && i.size === size ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

  decrease: (id, size) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.id === id && i.size === size
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),

  removeItem: (id, size) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.size === size)),
    })),

  clearCart: () => set({ items: [] }),
}));