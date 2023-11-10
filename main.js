const pizzaForm = document.getElementById('pizza-form');
const ingredienteInput = document.getElementById('ingrediente');
const cantidadInput = document.getElementById('cantidad');
const ingredientesList = document.getElementById('ingredientes-list');
const totalElement = document.getElementById('total');
const agregarButton = document.getElementById('agregar');

let total = 0;
const ingredientes = [];

const preciosIngredientes = {
    pepperoni: 2.5,
    champiñones: 1.5,
    jamón: 2.0,
    pimientos: 1.0,
    cebolla: 1.0,
    aceitunas: 1.5,
    choclo: 1.0,
    tomate: 1.0,
    carne: 2.0,
    pollo: 2.0,
    extraqueso: 2.0
};

agregarButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const ingrediente = ingredienteInput.value;
    const cantidad = parseInt(cantidadInput.value);

    if (ingrediente && preciosIngredientes[ingrediente] && !isNaN(cantidad) && cantidad > 0) {
        const precioIngrediente = preciosIngredientes[ingrediente];
        const costoIngrediente = precioIngrediente * cantidad;

        total += costoIngrediente;
        ingredientes.push({ ingrediente, cantidad, costoIngrediente });

        const li = document.createElement('li');
        li.textContent = `${cantidad} ${ingrediente} - $${costoIngrediente.toFixed(2)}`;
        ingredientesList.appendChild(li);

        totalElement.textContent = `Total: $${total.toFixed(2)}`;

        ingredienteInput.value = '';
        cantidadInput.value = '';
    } else {
        alert('Por favor, selecciona un ingrediente válido y proporciona una cantidad válida.');
    }
});

pizzaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const masa = document.getElementById('masa').value;

    const mensajePizza = `¡Aquí está tu pizza!\nMasa de pizza: ${masa}\nIngredientes:\n${ingredientes.map(ingrediente => `- ${ingrediente.cantidad} ${ingrediente.ingrediente} - $${ingrediente.costoIngrediente.toFixed(2)}`).join('\n')}\nTotal: $${total.toFixed(2)}`;
    
    alert(mensajePizza);
});

