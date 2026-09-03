import sys
import pathlib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(str(pathlib.Path(__file__).parent.parent))
print("caminho: ", str(pathlib.Path(__file__).parent.parent))
from routes.MainRouter import router as main_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(main_router)
