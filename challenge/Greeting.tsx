type GreetingProps = { name: string };

export default function Greeting(props: GreetingProps) {
  return <p>Hello {props.name}</p>;
}
