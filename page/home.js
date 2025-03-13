export function Home() {
  const divContent = document.querySelector('#content');

  const elements = {
    homeHeading: document.createElement('h1'),
    homePara: document.createElement('p'),
  };

  elements.homeHeading.textContent = 'Welcome to the restaurant page';
  elements.homePara.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus in lorem ac pulvinar. Nunc vel interdum augue, vel sollicitudin ipsum. Sed et velit turpis. Duis rhoncus erat eu purus ultricies interdum vitae tempus nibh. Nunc quis faucibus massa. Donec nisl ligula, semper et volutpat in, condimentum sit amet dolor. Sed fringilla quam lorem, imperdiet porttitor diam viverra ut. Vivamus tempus egestas augue, ac finibus ante tristique in.';

  for (const element in elements) {
    divContent.appendChild(elements[element]);
  }
}
