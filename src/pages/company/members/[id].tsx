import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import Button from '@/components/button';
const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <p>Member Id: {id}</p>
      <Button></Button>
      <Button></Button>
    </div>
  );
};

export default Member;
