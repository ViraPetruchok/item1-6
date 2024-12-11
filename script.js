let shoppingList = [];

// Початкові товари
let item1 = {
  name: 'Яблука',
  quantity: 5,
  category: 'Фрукти',
};

let item2 = {
  name: 'Хліб',
  quantity: 1,
  category: 'Випічка',
};

shoppingList.push(item1, item2);

// Виведення списку покупок
shoppingList.map((item) => {
  console.log(`${item.name} - ${item.quantity} шт. - ${item.category}`);
});

// Створення об'єкта категорій
let categories = {
  [item1.category]: [item1],
  [item2.category]: [item2],
};

console.log('Категорії:', categories);

shoppingList.forEach(({ name, quantity, category }) => {
  console.log(`Товар: ${name}, Кількість: ${quantity}, Категорія: ${category}`);
});

// Функція для додавання нового товару
function addItem(name, quantity, category) {
  const newItem = { name, quantity, category };
  shoppingList.push(newItem);
  console.log(`Товар "${name}" додано до списку.`);
}

// Функція для видалення товару за іменем
function removeItem(name) {
  const initialLength = shoppingList.length;
  shoppingList = shoppingList.filter(item => item.name !== name);
  if (shoppingList.length < initialLength) {
    console.log(`Товар "${name}" видалено зі списку.`);
  } else {
    console.log(`Товар "${name}" не знайдено у списку.`);
  }
}

// Додавання нових товарів
addItem('Молоко', 2, 'Молочні продукти');
addItem('Банани', 3, 'Фрукти');

console.log('Список покупок після додавання:');
shoppingList.map((item) => {
  console.log(`${item.name} - ${item.quantity} шт. - ${item.category}`);
});

// Видалення товару
removeItem('Хліб');

console.log('Список покупок після видалення:');
shoppingList.map((item) => {
  console.log(`${item.name} - ${item.quantity} шт. - ${item.category}`);
});

// Спроба видалити товар, якого немає
removeItem('Мед');
