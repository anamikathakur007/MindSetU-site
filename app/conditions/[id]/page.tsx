import ConditionDetail from './ConditionDetail';

export async function generateStaticParams() {
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

export default function ConditionPage({ params }: { params: { id: string } }) {
  return <ConditionDetail conditionId={params.id} />;
}