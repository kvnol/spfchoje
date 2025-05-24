import { useEffect, useState } from 'react';
import * as S from './style';

type TFilter = {
  value: Date;
  onChange: (date: Date) => void;
}

export const Filter = ({value, onChange}: TFilter) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('');

  useEffect(() => {
    setDay(value.toLocaleDateString('pt-br', {
      day: '2-digit'
    }));
    setMonth(value.toLocaleDateString('pt-br', {
      month: '2-digit'
    }))
  }, [value])
  
  const doFilter = () => {
    const date = new Date(`${month}/${day}`);

    if (isNaN(date.getTime())) {
      onChange(new Date());
    } else {
      onChange(date);
    }
  }

  const format = (value: string, total: number) => {
    let date = value.replace(/\D/g, '');

    if (date.length > 2) date = date.slice(0, 2);

    if (parseInt(date) > total) date = `${total}`;

    return date;
  }

  return (
    <S.Filter>
      no dia <S.FilterInput type="text" value={day} onChange={(e) => setDay(format(e.target.value, 31))} onBlur={doFilter} maxLength={2} /> do <S.FilterInput type="text" value={month} onChange={(e) => setMonth(format(e.target.value, 12))} onBlur={doFilter} maxLength={2} />.
    </S.Filter>
  )
}