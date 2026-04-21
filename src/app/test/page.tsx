
export default function TestPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ color: "#1f3d2b", marginBottom: "1rem" }}>Test CSS - WA XLE AHI</h1>
      
      <div style={{ 
        backgroundColor: "#fdfaf6", 
        padding: "2rem", 
        borderRadius: "0.75rem",
        marginBottom: "1rem",
        border: "2px solid #f58442"
      }}>
        <h2 style={{ color: "#1f3d2b" }}>Section Test</h2>
        <p style={{ color: "#4b5563" }}>Ceci est un test de CSS inline pour vérifier que les styles s'affichent</p>
      </div>

      <div style={{ 
        backgroundColor: "#1f3d2b", 
        color: "white",
        padding: "2rem",
        borderRadius: "0.75rem",
        marginBottom: "1rem"
      }}>
        <h2>Section avec fond vert foncé</h2>
        <p>Les couleurs apparaissent correctement ?</p>
      </div>

      <div style={{ 
        backgroundColor: "#f58442", 
        color: "white",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        marginBottom: "1rem"
      }}>
        <p><strong>Bouton test orange</strong></p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb"
        }}>
          <h3 style={{ color: "#1f3d2b" }}>Card 1</h3>
          <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>Test de card</p>
        </div>

        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb"
        }}>
          <h3 style={{ color: "#1f3d2b" }}>Card 2</h3>
          <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>Test de card</p>
        </div>

        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb"
        }}>
          <h3 style={{ color: "#1f3d2b" }}>Card 3</h3>
          <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>Test de card</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#dcfce7", border: "2px solid #22c55e", borderRadius: "0.5rem" }}>
        <p style={{ color: "#166534" }}>✓ Si vous voyez cette page colorée, les styles CSS fonctionnent correctement !</p>
      </div>
    </main>
  );
}
