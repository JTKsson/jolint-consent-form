const ConsentForm = () => {
  return (
    <div>
      <form>
        <p>
        <label for="name">Name:</label>
        <input type="text" id="fname" name="name" required/>
        </p>
        <p>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"/>
        </p>
        <p>
        <span><input type="checkbox" name="consent" value="no" id="consent" unchecked required/></span>
        I hereby consent to the processing of my personal data as described before.
        </p>
      </form>
    </div>
  )
}

export default ConsentForm