from fastapi import APIRouter
from .pessoas_routes import pessoas_rt
from .produtos_routes import produtos_rt
from .compras_routes import compras_rt

router = APIRouter()
router.include_router(pessoas_rt)
router.include_router(produtos_rt)
router.include_router(compras_rt)

@router.get("/teste")
def read_exemplo():
    return {"message": "Rota de exemplo"}