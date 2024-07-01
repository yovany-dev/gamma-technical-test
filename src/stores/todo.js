import { defineStore } from "pinia";
import Database from "../services/db";

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
    db: new Database('todos'),
    dbCart: new Database('cart'),
    subtotal: 0,
    cart: Number(sessionStorage.getItem('cart')),
  }),

  getters: {
    cartValue() {
      return this.cart > 0 ? this.cart : '';
    },
    empty() {
      return !this.todos || !this.todos.length > 0;
    },
  },

  actions: {
    addTodo(todo) {
      if (!this.todos) {
        this.todos = [todo];
        this.db.set(this.todos);
        return;
      }
      const index = this.todos.findIndex(t => t.id === todo.id);
      if (index >=0) {
        const newTodos = [...this.todos];
        newTodos[index].amount += 1;
        this.todos = newTodos;
      } else {
        this.todos = [...this.todos, todo];
      }
      this.db.set(this.todos);
    },
    removeTodo(id) {
      const newTodos = this.todos.filter(t => t.id !== id);
      this.todos = newTodos;
      this.db.set(this.todos);
    },
    updatedTodo(id, todo) {
      const newTodos = [...this.todos];
      const index = this.todos.findIndex(t => t.id === id);
      newTodos[index] = todo;
      this.todos = newTodos;
      this.db.set(this.todos);
    },
    getData() {
      try {
        const data = this.db.get();
        this.todos = data
      } catch (error) {
        throw new Error(error);
      }
    },
    increaseCart() {
      this.cart++;
      this.dbCart.set(this.cart);
    },
    decreaseCart() {
      if (this.cart >= 1) {
        this.cart--;
        this.dbCart.set(this.cart);
      }
    },
    updateCart(value) {
      this.cart = value;
      this.dbCart.set(this.cart);
    },
    getSubtotal() {
      if (this.todos) {
        let all = 0;
        this.todos.forEach(todo => {
          all += todo.price * todo.amount;
        });
        this.subtotal = all;
      }
    },
    getDiscount(code) {
      const PROMO_CODE = 'PROMOTION_2024'
      if (code === PROMO_CODE) {
        this.subtotal = this.subtotal * 50 / 100;
      }
    },
  }
});
