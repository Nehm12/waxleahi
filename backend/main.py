from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="WA XLE AHI API",
    description="API pour le service de courses à domicile WA XLE AHI",
    version="1.0.0"
)

# Configuration CORS pour accepter les requêtes du front-end et de l'app mobile
origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
    "https://waxleahi.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèles Pydantic
class ContactMessage(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    message: str

class CoverageRequest(BaseModel):
    name: str
    email: str
    phone: str
    zone: str

class OrderRequest(BaseModel):
    customer_name: str
    customer_phone: str
    customer_address: str
    items: list[dict]
    total_price: float

# Routes de santé
@app.get("/")
async def root():
    return {
        "message": "WA XLE AHI API",
        "version": "1.0.0",
        "status": "online"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "WA XLE AHI"
    }

# Routes de contact
@app.post("/api/contact")
async def send_contact_message(message: ContactMessage):
    """
    Endpoint pour envoyer un message de contact
    """
    try:
        # Ici, vous pouvez ajouter la logique pour envoyer l'email ou sauvegarder en base de données
        print(f"Message reçu de {message.name}: {message.message}")
        
        return {
            "status": "success",
            "message": "Votre message a été reçu. Nous vous recontacterons rapidement.",
            "data": {
                "name": message.name,
                "email": message.email,
                "subject": message.subject
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Routes de couverture
@app.post("/api/coverage-request")
async def request_coverage(request: CoverageRequest):
    """
    Endpoint pour demander une couverture dans une nouvelle zone
    """
    try:
        print(f"Demande de couverture pour {request.zone} par {request.name}")
        
        return {
            "status": "success",
            "message": "Votre demande a été reçue. Nous étudierons la possibilité d'extension à votre zone.",
            "data": {
                "name": request.name,
                "zone": request.zone,
                "email": request.email
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Routes de commandes
@app.post("/api/orders")
async def create_order(order: OrderRequest):
    """
    Endpoint pour créer une nouvelle commande
    """
    try:
        if not order.items:
            raise HTTPException(status_code=400, detail="La commande doit contenir au moins un article")
        
        # Simulation de création de commande
        order_id = "ORD-" + str(hash(order.customer_phone))[-8:]
        
        print(f"Commande créée: {order_id} pour {order.customer_name}")
        
        return {
            "status": "success",
            "message": "Commande reçue. Un livreur sera assigné rapidement.",
            "order_id": order_id,
            "data": {
                "customer_name": order.customer_name,
                "customer_phone": order.customer_phone,
                "total_price": order.total_price,
                "items_count": len(order.items)
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Routes d'information
@app.get("/api/zones")
async def get_served_zones():
    """
    Endpoint pour obtenir les zones desservies
    """
    zones = {
        "Casablanca": {
            "coverage": 95,
            "zones": ["Centre-ville", "Anfa", "Gauthier", "Maarif", "Hay Hassani"]
        },
        "Rabat": {
            "coverage": 85,
            "zones": ["Agdal", "Souissi", "Hassan", "Océan", "Salé"]
        },
        "Fès": {
            "coverage": 75,
            "zones": ["Fès Nouvelle", "Fès Médina", "Fès Port", "Aït Myara"]
        },
        "Marrakech": {
            "coverage": 80,
            "zones": ["Gueliz", "Medina", "Palmeraie", "Hivernage"]
        },
        "Tanger": {
            "coverage": 70,
            "zones": ["Centre", "Mghogho", "Charf", "Boubana"]
        },
        "Agadir": {
            "coverage": 75,
            "zones": ["Corniche", "Hassan II", "Talborjt"]
        }
    }
    return {
        "status": "success",
        "data": zones,
        "total_cities": len(zones)
    }

@app.get("/api/team")
async def get_team_info():
    """
    Endpoint pour obtenir les informations de l'équipe
    """
    team = [
        {
            "id": 1,
            "name": "Ahmed Hassan",
            "role": "Fondateur & Directeur",
            "description": "Visionnaire passionné par l'aide aux seniors et aux personnes en difficulté."
        },
        {
            "id": 2,
            "name": "Fatima El Mansouri",
            "role": "Responsable Logistique",
            "description": "Experte en organisation et en gestion des livraisons 24h/24."
        },
        {
            "id": 3,
            "name": "Marc Dubois",
            "role": "Responsable Client",
            "description": "Dédié à écouter et satisfaire les besoins de chaque client."
        },
        {
            "id": 4,
            "name": "Amina Benali",
            "role": "Coordinatrice Livraison",
            "description": "Garantit que chaque livraison est ponctuelle et soignée."
        }
    ]
    return {
        "status": "success",
        "data": team,
        "team_size": len(team)
    }

# Gestion des erreurs 404
@app.get("/api/{path:path}")
async def not_found(path: str):
    raise HTTPException(status_code=404, detail=f"L'endpoint /{path} n'existe pas")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
