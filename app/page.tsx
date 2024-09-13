import NavLayout from '@/app/nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function HomePage() {
  return (
    <div>
      <NavLayout />
    </div>
  );
}
