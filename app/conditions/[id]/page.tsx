// TEMP: Force redeploy for Vercel build fix
import ConditionDetail from './ConditionDetail';

interface PageProps {
  params: {
    id: string;
  };
}

// generateStaticParams helps statically generate dynamic routes
export function generateStaticParams() {
  return [
    { id: 'depression' },
    { id: 'anxiety' },
    { id: 'stress' },
    { id: 'ptsd' },
    { id: 'ocd' },
    { id: 'bipolar' },
    { id: 'adhd' },
    { id: 'eating' },
    { id: 'sleep' },
    { id: 'social' },
  ];
}

// The page function can be async or sync — it doesn't affect type checking
export default function ConditionPage({ params }: PageProps) {
  return <ConditionDetail conditionId={params.id} />;
}
