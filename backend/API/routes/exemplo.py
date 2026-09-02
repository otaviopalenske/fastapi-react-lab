from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_exemplo():
    return {"message": "Rota de exemplo"}
