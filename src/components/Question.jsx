import NumberIcon from './NumberIcon';

export default function Question({ index, desc }) {
  const options = ['a', 'b', 'c', 'd', 'e'];

  return (
    <div className='border-b-2'>
      <p>{index}</p>
      <p>{desc}</p>

      <div className='flex'>
        {options.map((option, i) => (
          <button className='border rounded-full flex items-center' key={i}>
            <NumberIcon number={i + 1} />
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
