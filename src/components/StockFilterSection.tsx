import { useState } from "react";
import { Check, Filter, Target, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Stock {
  symbol: string;
  name: string;
  sector: string;
  selected: boolean;
}

export const StockFilterSection = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    {
      symbol: "NVDA",
      name: "NVIDIA",
      sector: "Technology Sector",
      selected: true
    },
    {
      symbol: "JPM", 
      name: "JPMorgan Chase & Co.",
      sector: "Financial Sector",
      selected: true
    },
    {
      symbol: "PG",
      name: "The Procter & Gamble Company", 
      sector: "Consumer Staples Sector",
      selected: true
    },
    {
      symbol: "SPY",
      name: "SPDR S&P 500 ETF Trust",
      sector: "Broad Market ETF",
      selected: true
    }
  ]);

  const toggleStock = (symbol: string) => {
    setStocks(stocks.map(stock => 
      stock.symbol === symbol ? { ...stock, selected: !stock.selected } : stock
    ));
  };

  const selectedCount = stocks.filter(stock => stock.selected).length;

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Create Stock Filter
            <span className="block text-primary">Select & Apply</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose which stocks to monitor and apply filtering criteria
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stage 1: Select Stocks */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Select Stocks</h3>
                <p className="text-sm text-muted-foreground">Choose stocks to monitor</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {stocks.map((stock) => (
                <div 
                  key={stock.symbol}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    stock.selected 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => toggleStock(stock.symbol)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        stock.selected ? 'border-primary bg-primary' : 'border-muted-foreground'
                      }`}>
                        {stock.selected && <Check className="h-3 w-3 text-primary-foreground" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{stock.symbol}</span>
                          <Badge variant="secondary" className="text-xs">
                            {stock.sector}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{stock.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Stage 2: Apply Filter */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Filter className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Apply Filter</h3>
                <p className="text-sm text-muted-foreground">Process selected stocks</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Selected Stocks</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {selectedCount} stock{selectedCount !== 1 ? 's' : ''} selected for monitoring
                </p>
                <div className="flex flex-wrap gap-2">
                  {stocks.filter(stock => stock.selected).map(stock => (
                    <Badge key={stock.symbol} variant="default">
                      {stock.symbol}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium mb-1">Filter Criteria:</div>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Calculate 60-day SMA</li>
                    <li>• Calculate 120-day SMA</li>
                    <li>• Detect Golden/Death Cross</li>
                  </ul>
                </div>
              </div>

              <Button className="w-full" disabled={selectedCount === 0}>
                Apply Filter ({selectedCount} stocks)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};