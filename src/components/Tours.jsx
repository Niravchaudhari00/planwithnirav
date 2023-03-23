import Card from "./Card";

const Tours = ({tours}) => {
     console.log(tours);
     return (
          <>
               <header>
                    <h1 className="">Plan With Nirav</h1>
               </header>
               <main>
                    <Card />
               </main>
               {/* {props.tours} */}
          </>
     );
}

export default Tours;