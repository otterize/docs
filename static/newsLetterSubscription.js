window.addEventListener("load", () => {
  const form = document.getElementById("mailchimp_form");
  const Statuses = Object.freeze({
    AlreadySubscribed: "alreadySubscribed",
    Success: "success",
    Error: "error",
  });
  const StatusColor = Object.freeze({
    [Statuses.AlreadySubscribed]: "green",
    [Statuses.Success]: "green",
    [Statuses.Error]: "red",
  });
  const StatusMessages = Object.freeze({
    [Statuses.AlreadySubscribed]: "Thanks for subscribing!",
    [Statuses.Success]: "Thanks for subscribing!",
    [Statuses.Error]: "Woops... Something went wrong!",
  });

  if (form) {
    form.addEventListener("submit", subscribe);
  }

  async function subscribe(e) {
    e.preventDefault();

    // indicate that we are subscribing...
    const ctaButton = document.getElementById("mailchimp_cta");
    const prevCtaText = ctaButton.innerHTML;
    ctaButton.innerHTML = "submitting...";
    //

    try {
      const url = "http://localhost:3000/newsletterSubscribeEndPoint";
      const method = "post";
      const formData = new FormData(e.currentTarget);

      const response = await fetch(url, { method, body: formData });
      const responseBody = await response.json();

      const isSubscribed = responseBody?.response?.email_address;
      const isError = Boolean(responseBody?.error);
      const isAlreadySubscribed =
        isError &&
        responseBody?.error?.response?.text?.includes("Member Exists");

      if (isAlreadySubscribed || isSubscribed) {
        setStatusIndication(Statuses.Success);
      } else {
        setStatusIndication(Statuses.Error);
      }
    } catch (error) {
      console.error(error);
      setStatusIndication(Statuses.Error);
    } finally {
      // done submitting
      ctaButton.innerHTML = prevCtaText;
    }
  }

  function setStatusIndication(status) {
    const titleElm = document.getElementById("mailchimp_title");
    titleElm.innerText = StatusMessages[status];
    titleElm.style.color = StatusColor[status];
  }
});
