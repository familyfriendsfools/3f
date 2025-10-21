import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function generateEditablePDF(data: Record<string, string>) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4
  const { height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let y = height - 50;
  const marginX = 50;
  const maxWidth = 495; // 595 - 2 * 50

  const drawText = (
    text: string,
    x = marginX,
    size = 12,
    gray = false,
    usedFont = font
  ) => {
    const lines = wrapText(text, usedFont, size, maxWidth);
    lines.forEach((line) => {
      page.drawText(line, {
        x,
        y,
        size,
        font: usedFont,
        color: gray ? rgb(0.4, 0.4, 0.4) : rgb(0, 0, 0),
      });
      y -= size + 2;
    });
  };

  const drawCenteredBold = (text: string, size = 14) => {
    const textWidth = boldFont.widthOfTextAtSize(text, size);
    page.drawText(text, {
      x: 595 / 2 - textWidth / 2,
      y,
      size,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    y -= 40;
  };

  const wrapText = (
    text: string,
    font: any,
    fontSize: number,
    maxWidth: number
  ): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let line = '';

    for (const word of words) {
      const testLine = line + (line ? ' ' : '') + word;
      const width = font.widthOfTextAtSize(testLine, fontSize);
      if (width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  // Conteúdo
  drawCenteredBold("CONTRATO DE EMPRÉSTIMO/MÚTUO");

  drawText("Entre:");
  drawText("1) ____________________, portador do C.C. nº ____________, válido até ____________,");
  drawText("com NIF ____________, residente em ____________________, designado como Primeiro Contratante.");
  drawText("2) ____________________, portador do C.C. nº ____________, válido até ____________,");
  drawText("com NIF ____________, residente em ____________________, designado como Segundo Contratante.");
  drawText("É celebrado o presente contrato de mútuo, nos termos dos arts. 1142º e seguintes do Código Civil.");

  drawCenteredBold("Cláusula Primeira - Objeto");
  drawText(`O segundo contratante pretende investir em negócio próprio no setor: ${data.campaignType || '__________'}.`);
  drawText(`Subtipo: ${data.campaignSubType || '__________'}.`);
  drawText(`Precisa de um financiamento de até ${data.goal || '__________'} €.`);
  drawText("O primeiro contratante aceita financiar a título de empréstimo, quantia que o segundo contratante recebe.");
  drawText("O segundo contratante entrega como caução ____________________.");

  drawCenteredBold("Cláusula Segunda - Condições");
  drawText(`• Primeira tranche de ${data.goal || '__________'} €, na data do contrato.`);
  drawText(`• Tranches seguintes com periodicidade ${data.paybackPlan || '__________'}.`);
  drawText("• Amortizações com juros sobre valor reembolsado até à data da amortização.");
  drawText("• Montantes depositados na conta do mutuante: Banco ____________, IBAN ____________.");
  drawText("• Juros vencidos agregados ao valor e pagos na mesma data e conta.");
  drawText("• Juros futuros recalculados com base no saldo restante.");
  drawText("• Taxa de juro: Euribor 1 mês + 1% spread.");

  drawCenteredBold("Cláusula Terceira - Prazo");
  drawText(`O empréstimo será amortizado em até ${data.timeToPayBack || '__________'} meses.`);

  drawCenteredBold("Cláusula Quarta - Incumprimento");
  drawText("• Em caso de incumprimento, o segundo contratante toma como sua a caução referida.");
  drawText("• Para reaver a caução, deverá pagar a dívida + juros de mora (Euribor 1M + 1%).");

  y -= 20;
  drawText("Assinatura do Mutuante ____________________", marginX);
  drawText("Assinatura do Mutuário ____________________",);

  y -= 30;
  drawText("Exemplo de Cálculo:", marginX, 10, true);
  drawText("Se amortizar 10.000€ após 3 meses com juro 4.33%, total = 10.108,25€.", marginX, 10, true);
  drawText(
    "Se 3 anos após início, dívida = 10.000€, juros vencidos = 1.000€, juro 5% e amortização 6 meses depois:",
    marginX,
    10,
    true
  );
  drawText("Total = 11.275€.", marginX, 10, true);
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ContratoMutuo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
