const btn = document.getElementById('btn');
const img = document.getElementById('cat-img');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://cataas.com/catt');
    // Cuando no contesta el servidor
    if (!response.ok) {
      alert('¡Oops! No se pudo obtener la imagen del servidor.');
      throw new Error('¡Ups! Ha ocurrido un error.');
    }
    const data = await response.blob();
    img.src = URL.createObjectURL(data);
  } catch (error) {
    // Cuando no hay internet
    alert('¡Oops! No se pudo conectar al servidor. Verifique su conexión a Internet.');
    console.error('Error:', error);
  }
});
