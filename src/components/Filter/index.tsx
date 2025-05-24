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
      no dia{' '}
      <S.FilterInput
        type="text"
        value={day}
        maxLength={2}
        inputMode="numeric"
        onChange={(e) => {
          const raw = e.target.value.replace(/\D/g, '');
          setDay(raw);
        }}
        onBlur={() => {
          const formatted = format(day, 31);
          setDay(formatted);
          doFilter();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const formatted = format(day, 31);
            setDay(formatted);
            doFilter();
            e.currentTarget.blur();
          }
        }}
      />{' '}
      do{' '}
      <S.FilterInput
        type="text"
        value={month}
        maxLength={2}
        inputMode="numeric"
        onChange={(e) => {
          const raw = e.target.value.replace(/\D/g, '');
          setMonth(raw);
        }}
        onBlur={() => {
          const formatted = format(month, 12);
          setMonth(formatted);
          doFilter();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const formatted = format(month, 12);
            setMonth(formatted);
            doFilter();
            e.currentTarget.blur();
          }
        }}
      />.
    </S.Filter>
  )
}