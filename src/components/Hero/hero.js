function hero() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      
      <label>
        Edit your post:
        <textarea className="pb-114 pr-244 mr-0 mt-131 ml-263"></textarea>
      </label>
      <div class="btn-group" role="group" className="margin-left: -175px;padding-top: 0px;margin-top: 51px;"><button class="btn btn-primary" type="button">Button 1</button><button class="btn btn-primary" type="button">Button 2</button></div>
    </form>
  );
};

export default hero;