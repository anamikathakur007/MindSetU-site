import ConditionDetail from './ConditionDetail';

type PageProps = {
  params: {
    id: string;
  };
};

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

export default async function ConditionPage({ params }: PageProps) {
  return <ConditionDetail conditionId={params.id} />;
}
