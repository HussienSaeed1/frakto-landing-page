import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFaqs = async () => {
  const response = await axios.get('/api/faq/index');
  return response.data?.data;
};

const useFaqs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFaqs,
  });
};

export default useFaqs;
