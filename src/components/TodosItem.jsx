export const TodosItem = ({
  title,
  status,
  id,
  handleDelete,
  handleToggle,
}) => {
  return (
    <div>
      {title}
      <button onClick={() => handleToggle(id)}>
        {status ? "Done" : "Not Done"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};
