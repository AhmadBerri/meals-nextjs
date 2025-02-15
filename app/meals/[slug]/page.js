export default function MealPage({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1>Meal</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
