import { useNavigate } from "react-router";
import { ArrowLeft, Users, ShoppingCart, Store, Clock, DollarSign, Utensils } from "lucide-react";

export default function GameRules() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff6dc] min-h-screen relative">
      {/* Header */}
      <div className="backdrop-blur-[6px] bg-[rgba(255,246,220,0.8)] sticky top-0 z-50">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-b-4 border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-between pb-[20px] pt-[16px] px-[24px]">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#725800] hover:text-[#b02317] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[16px] tracking-[-0.4px] uppercase">Back to Home</span>
          </button>
          <button onClick={() => navigate("/")} className="cursor-pointer bg-transparent border-none p-0">
            <div className="font-['Be_Vietnam_Pro:Black',sans-serif] text-[#725800] text-[24px] tracking-[-1.2px] uppercase">
              Market Frenzy
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-[24px] py-[48px]">
        {/* Hero Section */}
        <div className="text-center mb-[64px]">
          <div className="bg-[#006a3b] inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-[9999px] mb-[16px]">
            <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#a2ffc0] text-[12px] tracking-[1.2px] uppercase">
              Game Documentation
            </div>
          </div>
          <h1 className="font-['Be_Vietnam_Pro:Black',sans-serif] text-[#725800] text-[60px] leading-[60px] mb-[16px]">
            How to Play
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[18px] leading-[28px] max-w-[672px] mx-auto">
            Master the art of supply chain management and business strategy in this Kahoot-style trading simulation.
          </p>
        </div>

        {/* Game Overview */}
        <div className="bg-[#f1dd83] rounded-[32px] p-[32px] mb-[32px] relative">
          <div aria-hidden="true" className="absolute border-[#ffcb2d] border-b-8 border-solid inset-0 pointer-events-none rounded-[32px]" />
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
          <div className="relative">
            <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[32px] leading-[40px] mb-[24px]">
              Game Overview
            </h2>
            <div className="grid grid-cols-3 gap-[24px]">
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[16px] p-[24px]">
                <Clock className="w-10 h-10 text-[#725800] mb-[12px]" />
                <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[20px] mb-[8px]">
                  5 Rounds
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px] leading-[20px]">
                  7 minutes of play + 3 minutes for host per round
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[16px] p-[24px]">
                <Users className="w-10 h-10 text-[#725800] mb-[12px]" />
                <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[20px] mb-[8px]">
                  4 Parties
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px] leading-[20px]">
                  Host, Suppliers, Sellers (3 groups), and Restaurants (3 groups)
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[16px] p-[24px]">
                <DollarSign className="w-10 h-10 text-[#725800] mb-[12px]" />
                <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[20px] mb-[8px]">
                  2 Champions
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px] leading-[20px]">
                  Highest cash on hand for Sellers and Restaurants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parties & Roles */}
        <div className="mb-[32px]">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#b02317] text-[32px] leading-[40px] mb-[24px] flex items-center gap-[12px]">
            <Users className="w-8 h-8" />
            Parties & Roles
          </h2>
          <div className="grid grid-cols-1 gap-[16px]">
            <div className="bg-[#fff1b8] rounded-[24px] p-[24px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#725800] rounded-[16px] p-[12px] shrink-0">
                  <Store className="w-6 h-6 text-[#fff6dc]" />
                </div>
                <div>
                  <h3 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[20px] mb-[8px]">
                    Host / Supplier / Eater
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px]">
                    Controls the game flow, acts as the government/supplier selling wholesale ingredients, and plays the role of the Eater to buy the final dishes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#fff1b8] rounded-[24px] p-[24px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#b02317] rounded-[16px] p-[12px] shrink-0">
                  <ShoppingCart className="w-6 h-6 text-[#fff6dc]" />
                </div>
                <div>
                  <h3 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#b02317] text-[20px] mb-[8px]">
                    Sellers (3 Groups)
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px]">
                    The middlemen who buy ingredients from the Supplier and sell them to Restaurants for a profit. Masters of negotiation managing the market stalls.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#fff1b8] rounded-[24px] p-[24px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#006a3b] rounded-[16px] p-[12px] shrink-0">
                  <Utensils className="w-6 h-6 text-[#fff6dc]" />
                </div>
                <div>
                  <h3 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#006a3b] text-[20px] mb-[8px]">
                    Restaurants (3 Groups)
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px]">
                    The producers who buy ingredients from Sellers, cook dishes, and sell them to the Eater. Strategic shoppers looking for the best daily deals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Flow */}
        <div className="mb-[32px]">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[32px] leading-[40px] mb-[24px]">
            Game Flow
          </h2>
          
          {/* Phase 1 */}
          <div className="bg-[#fbe997] rounded-[24px] p-[32px] mb-[24px] relative">
            <div aria-hidden="true" className="absolute border-[#bcad6d] border-b-4 border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="relative">
              <div className="bg-[#006a3b] inline-flex px-[16px] py-[4px] rounded-[9999px] mb-[16px]">
                <span className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#a2ffc0] text-[14px] uppercase">Phase 1</span>
              </div>
              <h3 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[24px] mb-[16px]">
                The Opening Round
              </h3>
              <ol className="space-y-[12px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px]">
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">1.</span>
                  <span><strong>Inventory Grant:</strong> Each Seller group is given 3 free cards per type of ingredient.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">2.</span>
                  <span><strong>Eater Reveal:</strong> The Host releases the randomized Eater Profile to all players.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">3.</span>
                  <span><strong>B2B Market:</strong> Sellers set the selling prices of their ingredients and negotiate with the Restaurant party.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">4.</span>
                  <span><strong>Production:</strong> Restaurants determine which dish to make, negotiate to buy ingredients from Sellers, and make exactly 1 dish to serve to the Eater.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">5.</span>
                  <span><strong>Selection:</strong> The Host reveals which Restaurant's dish the Eater bought.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#fbe997] rounded-[24px] p-[32px] relative">
            <div aria-hidden="true" className="absolute border-[#bcad6d] border-b-4 border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="relative">
              <div className="bg-[#b02317] inline-flex px-[16px] py-[4px] rounded-[9999px] mb-[16px]">
                <span className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#ffefed] text-[14px] uppercase">Phase 2</span>
              </div>
              <h3 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[24px] mb-[16px]">
                Standard Market Loop (Repeats until game ends)
              </h3>
              <ol className="space-y-[12px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px]">
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">1.</span>
                  <span><strong>Market Setup:</strong> The Host/Supplier optionally adjusts round duration, releases a Random Event, and sets wholesale ingredient prices within the allowed ranges.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">2.</span>
                  <span><strong>Supplier Window:</strong> Sellers purchase ingredients from the Supplier within a strict 2-minute window.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">3.</span>
                  <span><strong>Eater Reveal:</strong> The Host releases the new Eater's profile.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">4.</span>
                  <span><strong>B2B Market:</strong> Sellers set ingredient selling prices and negotiate with the Restaurant party.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">5.</span>
                  <span><strong>Production:</strong> Restaurants determine which dish to make, buy the ingredients from Sellers, and make 1 dish to serve to the Eater.</span>
                </li>
                <li className="flex gap-[12px]">
                  <span className="font-bold text-[#725800]">6.</span>
                  <span><strong>Selection:</strong> The Host selects the winning dish and pays the Restaurant.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-[32px]">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[32px] leading-[40px] mb-[24px]">
            The 10 Ingredients
          </h2>
          <div className="bg-[#fff1b8] rounded-[24px] p-[32px]">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#b02317] text-[14px] mb-[16px] font-bold">
              Note: Sellers must sell items within these price ranges, even during promotions.
            </p>
            <div className="grid grid-cols-2 gap-[16px]">
              {[
                { name: "Bell Pepper", price: "$1 - $3", unit: "per piece" },
                { name: "Onion", price: "$1 - $3", unit: "per piece" },
                { name: "Garlic", price: "$1 - $3", unit: "per piece" },
                { name: "Cooking Oil", price: "$1 - $3", unit: "per tbsp" },
                { name: "Potato", price: "$1 - $4", unit: "per kilogram" },
                { name: "Cabbage", price: "$2 - $4", unit: "per head" },
                { name: "Rice", price: "$1 - $3", unit: "per cup" },
                { name: "Chicken Breast", price: "$2 - $5", unit: "per piece" },
                { name: "Cheese", price: "$2 - $4", unit: "per 100gr" },
                { name: "Tomato", price: "$1 - $3", unit: "per piece" },
              ].map((ingredient) => (
                <div key={ingredient.name} className="bg-[rgba(255,255,255,0.5)] rounded-[12px] p-[16px]">
                  <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[16px] mb-[4px]">
                    {ingredient.name}
                  </div>
                  <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px]">
                    {ingredient.price} <span className="text-[12px]">({ingredient.unit})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes */}
        <div className="mb-[32px]">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[32px] leading-[40px] mb-[24px]">
            The 5 Dishes (Recipes)
          </h2>
          <div className="grid grid-cols-1 gap-[16px]">
            {[
              { name: "Cheese Stuffed Chicken", ingredients: "Chicken Breasts (1 piece), Tomatoes (2 pieces), Cheese (100 grams)" },
              { name: "Chicken Stir Fry", ingredients: "Chicken Breasts (1 piece), Rice (1 cup), Bell Peppers (2 pieces), Onions (1 piece), Cooking Oil (1 tbsp)" },
              { name: "Rice Pilaf", ingredients: "Rice (1 cup), Bell Peppers (1 piece), Onions (2 pieces), Garlic (1 piece), Cooking Oil (2 tbsp)" },
              { name: "Potato Gratin", ingredients: "Potatoes (1 kilogram), Cheese (100 grams), Cooking Oil (2 tbsp)" },
              { name: "Cabbage Rolls", ingredients: "Cabbage (1 head), Rice (1 cup), Onions (1 piece), Garlic (2 pieces)" },
            ].map((dish, index) => (
              <div key={dish.name} className="bg-[#fbe997] rounded-[16px] p-[20px]">
                <div className="flex gap-[12px]">
                  <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[18px] shrink-0">
                    {index + 1}.
                  </div>
                  <div>
                    <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[18px] mb-[4px]">
                      {dish.name}
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px] leading-[20px]">
                      {dish.ingredients}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eater Profiles */}
        <div className="mb-[32px]">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[32px] leading-[40px] mb-[24px]">
            Eater Profiles
          </h2>
          <div className="bg-[#f1dd83] rounded-[24px] p-[32px]">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[16px] leading-[24px] mb-[24px]">
              Restaurants must satisfy the Host (playing as a random Eater) to make a sale. The final accepted price depends on the Eater's preferences and the Restaurant's negotiation skills.
            </p>
            <div className="grid grid-cols-1 gap-[12px]">
              {[
                { name: "James Smith (28)", role: "Personal Trainer", pref: "Requires low-carb, gluten-free foods with high nutrition" },
                { name: "Anne Tan (21)", role: "Undergraduate Student", pref: "Doesn't care about nutrition but hates boring dishes" },
                { name: "Emma Watson (57)", role: "Retiree", pref: "Requires organic, vegetarian food with high nutrition" },
                { name: "John Wick (35)", role: "Businessman", pref: "Wants good food with excellent arrangements and decorations" },
                { name: "Dane Ford (32)", role: "Sales Team Leader", pref: "Prefers quick and easy meals with medium nutrition" },
                { name: "Tsing Chen (73)", role: "University Professor", pref: "Prefers healthy traditional food with high nutrition" },
                { name: "Jane Dean (25)", role: "Freelancer", pref: "Wants to taste a wide variety of foods, as special as they are good" },
              ].map((eater) => (
                <div key={eater.name} className="bg-[rgba(255,255,255,0.5)] rounded-[12px] p-[16px]">
                  <div className="flex items-start gap-[12px]">
                    <div className="flex-1">
                      <div className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#725800] text-[16px] mb-[4px]">
                        {eater.name} - {eater.role}
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#675b24] text-[14px] leading-[20px]">
                        {eater.pref}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#725800] rounded-[32px] p-[48px] text-center">
          <h2 className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#fff6dc] text-[32px] mb-[16px]">
            Ready to Start Trading?
          </h2>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#f1dd83] text-[18px] leading-[28px] mb-[32px]">
            Now that you know the rules, it's time to put your skills to the test!
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#b02317] hover:bg-[#8a1a10] transition-colors px-[32px] py-[16px] rounded-[9999px] inline-flex items-center gap-[8px]"
          >
            <span className="font-['Be_Vietnam_Pro:Bold',sans-serif] text-[#ffefed] text-[16px] uppercase">
              Return to Home
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}