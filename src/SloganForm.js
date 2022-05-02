export default function SloganForm({ handleSubmit, setSloganForm }) {
  // React forms are a pain!
  // Track the sloganInput form state with a useState hook
  // const [sloganInput, setSloganInput] = useState();

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input onChange={(e) => setSloganForm(e.target.value)} />
        <button>Submit</button>
      </form>
    </section>
  );
}
