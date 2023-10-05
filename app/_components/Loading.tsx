// LoadingLine.tsx
'use client'

import { useEffect } from 'react';
import { useMotionValue, motion } from 'framer-motion';

const LoadingLine: React.FC = () => {
  const progress = useMotionValue(0);

  useEffect(() => {
    const loadProgress = () => {
      // Aqui, você pode atualizar o valor de progress com base no progresso da página
      // Por exemplo, você pode ouvir eventos de carregamento da página ou da API e atualizar progress
      // Certifique-se de ajustar a lógica para se adequar ao seu caso específico
      // progress.set(novo_valor);
    };

    loadProgress();

    // Lembre-se de limpar o ouvinte quando o componente é desmontado
    return () => {
      // Remova os ouvintes de carregamento, se necessário
    };
  }, []);

  return (
    <motion.div
      className="h-2 bg-blue-500 w-full"
      initial={{ scaleX: 0 }}
      style={{ originX: 0, transform: `scaleX(${progress.get()})` }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default LoadingLine;
