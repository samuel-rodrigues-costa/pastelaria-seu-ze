import Header from './components/Header';
import MenuItem from './components/MenuItem';

export default function Home() {
  const menuItems = [
    { name: 'Carne', price: 'R$ 10,00', image: '/pastel.jpg', available: true },
    { name: 'Pizza', price: 'R$ 10,00', image: '/pastel.jpg', available: false },
    { name: 'Carne', price: 'R$ 10,00', image: '/pastel.jpg', available: true },
    { name: 'Pizza', price: 'R$ 10,00', image: '/pastel.jpg', available: true },
    { name: 'Carne', price: 'R$ 10,00', image: '/pastel.jpg', available: false },
    { name: 'Pizza', price: 'R$ 10,00', image: '/pastel.jpg', available: true },
    { name: 'Carne', price: 'R$ 10,00', image: '/pastel.jpg', available: false },
    { name: 'Pizza', price: 'R$ 10,00', image: '/pastel.jpg', available: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />

      <main
        className="mt-2 flex flex-wrap items-center justify-center bg-orange-200 rounded-xl p-4 shadow-lg max-w-[992px]"
      >
        {menuItems.map((item, index) => (
          <div key={index}>
            <MenuItem
              name={item.name}
              price={item.price}
              image={item.image}
              available={item.available}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
