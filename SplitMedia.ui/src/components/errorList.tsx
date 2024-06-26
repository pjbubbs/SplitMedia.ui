export interface IErrorDetails  {
    title: string;
    messages: string[];
}

interface Props  {
    errorDetail: IErrorDetails | null;
}

export default function ErrorList ( data: Props )  {
    
    if(!data) { return null }


    const DrawLine = () => (
        <hr
            style={{
                color: 'black',
                backgroundColor: 'black',
                height: 1
            }}
        />
    );

  return (
    <>
    <DrawLine></DrawLine>
    {data.errorDetail?.title}
    <ul>
      { data.errorDetail?.messages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    </>
  );
};