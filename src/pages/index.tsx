import data from '@/data/almanaque.json';
import { useState } from "react";
import { Montserrat } from 'next/font/google'
import { Card } from '@/components/Card';
import { Filter } from '@/components/Filter';
 
const montserrat = Montserrat({
  subsets: ['latin'],
})
export default function Home() {
  const [date, onChange] = useState<Date>(new Date());
  const formattedDate = date?.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  })

  return (
    <main className={`${montserrat.className} wrapper`}>
      <div className="header">
        <h1>SPFC Hoje</h1>
        <Filter value={date} onChange={onChange} />
      </div>

      <div className="list">
        {data.map((item, index) => item.DATA.startsWith(formattedDate || '') && (
          <Card key={index} item={item} />
        ))}
      </div>

      <p className='footer'>Desenvolvido por <a href="https://kevinoliveira.com.br/" target="_blank" rel="noopener noreferrer">Kevin Oliveira</a></p>
    </main>
  );
}
