async function loadServices() {
  const container = document.getElementById("services");

  try {
    const response = await fetch("/api/services");

    if (!response.ok) {
      throw new Error("API haikujibu vizuri");
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error("Imeshindikana kupata huduma");
    }

    container.innerHTML = "";

    data.services.forEach(service => {
      const card = document.createElement("div");

      card.className = "service-card";

      card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <strong>${service.price} Tokens</strong>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <p>
        Imeshindikana kupakia huduma.
        Tafadhali jaribu tena.
      </p>
    `;
  }
}

loadServices();
