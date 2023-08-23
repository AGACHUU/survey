import Question from './Question';

const DATA = [
  { id: '1', desc: 'this is question. yeongsoo needs to study' },
  { id: '2', desc: 'this is not question.' },
  { id: '3', desc: 'this is from DB' },
];

export default function Template() {
  return (
    <div className='w-[600px]'>
      <div className='flex-col'>
        <p className='text-lg font-bold'>선정 조사표</p>

        <div className='flex justify-center items-center border p-2 mt-6'>
          <p className='font-bold'>
            조사 안내문 확정되면 설문에 앞서 제시할 에정
          </p>
        </div>

        <div className='flex border items-center p-2 mt-6 bg-slate-200'>
          <p>* 다음은 개인정보 수집 및 이용에 대한 안내입니다.</p>
        </div>
      </div>

      <div className='flex-col space-y-2 border rounded border-4 m-2 p-2'>
        {/* <Question index={1} desc='this is queston' />
        <Question index={2} desc='this is not queston' /> */}
        {DATA.map((datum, i) => (
          <Question key={datum.id} index={i + 1} desc={datum.desc} />
        ))}
      </div>

      <div>
        
      </div>
    </div>
  );
}
