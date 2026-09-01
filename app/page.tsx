import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Sleep Outside',
    description: 'A Website for managing products.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/zidreynkounkou-pro/wdd330-sleep-outside'
  },
  {
    title: 'The Movie & TV Hub',
    description: 'A Website that fetches and displays Movies.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/essodong-pro/wdd330'
  }
];
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>

      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}