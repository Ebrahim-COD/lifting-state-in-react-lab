const BurgerStack = ({ list, removeIngredient }) => {
    return (
        <ul>
            {list.length === 0 ? (
                <li>No ingredients</li>
            ) : (
                list.map((ingredient, index) => (
                    <li key={index} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button onClick={() => removeIngredient(index)}>X</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default BurgerStack;
