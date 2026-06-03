import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const wallet = searchParams.get('wallet');

  // Ici, le jeu demandera à votre API : 
  // "Est-ce que le wallet X a bien transféré 100 TALON ?"
  
  if (!wallet) {
    return NextResponse.json({ success: false, message: "No wallet provided" });
  }

  // Simulation pour l'instant (on verra la connexion BaseScan ensuite)
  return NextResponse.json({ success: true, message: "Transaction verified!" });
}
