import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // When the location changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location]);
  
  return null; // This component doesn't render anything
}