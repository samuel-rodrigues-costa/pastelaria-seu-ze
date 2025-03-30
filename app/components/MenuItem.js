import Image from 'next/image';

export default function MenuItem({ name, price, image, available }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center mt-6 ml-6 mr-6 mb-4 max-w-[250px] max-h-[500px] shadow-lg">

      <div className="flex flex-col gap-4 items-center justify-center">
        {/* Se indisponível, título com line-through */}
        <h2 className={`text-4xl text-center text-gray-700 ${!available ? 'line-through' : ''}`}>
          {name}
        </h2>
        {/* Se indisponível, filtro grayscale na imagem */}
        <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className={available ? 'max-w-[120px] max-h-[120px]' : 'grayscale max-w-[180px] max-h-[180px]'}
        />
        <p className="text-center text-3xl text-gray-700">{price}</p>
      </div>
    </div>
  );
}
