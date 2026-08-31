import Button from "./components/Ui/Button/Button";
import Card from "./components/Layout/Card/card";
import Table from "./components/Layout/Table/table";
import Home from "./Components/Pages/Home"

function App() {

   return <Home />

  // // Button functions
  // const handlePrimaryClick = () => {
  //   alert("Primary Button Clicked!");
  // };

  // const handleSecondaryClick = () => {
  //   alert("Secondary Button Clicked!");
  // };

  // const handleDelete = () => {
  //   alert("Delete Button Clicked!");
  // };

  // // Table data
  // const students = [
  //   {
  //     name: "Ahmed",
  //     age: 17,
  //     city: "Cairo",
  //   },
  //   {
  //     name: "Omar",
  //     age: 16,
  //     city: "Giza",
  //   },
  //   {
  //     name: "Mariam",
  //     age: 17,
  //     city: "Alexandria",
  //   },
  //   {
  //     name: "Youssef",
  //     age: 16,
  //     city: "Mansoura",
  //   },
  // ];

  // const columns = [
  //   "Name",
  //   "Age",
  //   "City",
  // ];

  // return (
  //   <div className="app">

  //     <h1>Reusable Components</h1>

  //     {/* ================= BUTTONS ================= */}

  //     <section>
  //       <h2>Buttons</h2>

  //       <div className="buttons">

  //         <Button
  //           text="Primary Button"
  //           onClick={handlePrimaryClick}
  //           variant="primary"
  //         />

  //         <Button
  //           text="Secondary Button"
  //           onClick={handleSecondaryClick}
  //           variant="secondary"
  //         />

  //         <Button
  //           text="Delete"
  //           onClick={handleDelete}
  //           variant="danger"
  //         />

  //         <Button
  //           text="Disabled"
  //           onClick={() => {}}
  //           variant="primary"
  //           disabled={true}
  //         />

  //       </div>
  //     </section>


  //     {/* ================= CARDS ================= */}

  //     <section>
  //       <h2>Cards</h2>

  //       <div className="cards">

  //         <Card
  //           title="React Development"
  //           description="Learn how to build modern web applications using React."
  //           image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  //         >
  //           <Button
  //             text="Learn More"
  //             variant="primary"
  //             onClick={() =>
  //               alert("React Course")
  //             }
  //           />
  //         </Card>


  //         <Card
  //           title="JavaScript"
  //           description="Learn JavaScript fundamentals and modern programming concepts."
  //           image="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  //         >
  //           <Button
  //             text="View Course"
  //             variant="secondary"
  //             onClick={() =>
  //               alert("JavaScript Course")
  //             }
  //           />
  //         </Card>

  //       </div>
  //     </section>


  //     {/* ================= TABLE ================= */}

  //     <section>
  //       <h2>Students</h2>

  //       <Table
  //         columns={columns}
  //         data={students}
  //         striped={true}
  //       />
  //     </section>
  //   </div
  //)

}

export default App;