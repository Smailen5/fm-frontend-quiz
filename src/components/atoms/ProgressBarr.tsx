type ProgressBarProps = {
    value: number;
    maxValue: number;
  };
  
  export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    maxValue,
  }) => {
    // calcola dinamicamente la percentuale
    let widthValue = (value / maxValue) * 100;
  
    // verifica di non superare il valore massimo, altrimenti la larghezza diventa 100%
    if (value > maxValue) widthValue = 100;
  
    return (
      <div className="my-4 h-4 w-full overflow-hidden rounded-2xl bg-navy p-1">
        <div
          style={{ width: `${widthValue}%` }}
          className="h-2 rounded-full bg-purple transition-all duration-500 ease-in-out"
        />
      </div>
    );
  };