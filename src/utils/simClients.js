const clients = [
  {
    id: "1",
    fName: "John",
    lName: "Doe",
  },
  {
    id: "2",
    fName: "Ronald",
    lName: "Mcdonald",
  },
];

const getClientbyID = (id) => {
  const found = clients.find((client) => client.id == id);
  return found ? found : { error: "not found" };
};

export { getClientbyID };
export default clients;
