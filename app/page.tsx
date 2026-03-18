interface CardProps {
  text: string;
}

function Card({ text }: CardProps) {
  return (
    <div className="border rounded-md border-blue-950 p-4">
      {text}
    </div>
  );
}


export default function Home() {
  const name = 'hashir'
  return (<div className="p-20 space-y-4">
    <div>hello,{name}</div>
    <Card text="hello,i am using next.js" />
    <Card text="hello" />
  </div>)
}