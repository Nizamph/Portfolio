import { useEffect, useState } from 'react';

const useFormattedDate = (isoDate: string) => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const date = new Date(dateString);
      const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
      setFormattedDate(formatted);
    };

    formatDate(isoDate);
  }, [isoDate]);

  return formattedDate;
};

export default useFormattedDate;
