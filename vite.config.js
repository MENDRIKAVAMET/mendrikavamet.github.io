import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // AJOUTE CETTE LIGNE :
  // Remplace 'valisoamendrika.github.io' par le nom de ton dépôt si nécessaire
  base: '/valisoamendrika.github.io/', 
})