import IconButton, { DUPLICATE_GLYPH, DELETE_GLYPH } from './IconButton.jsx';

export default function ItemCard({ item, index, onOpen, onDelete, onDuplicate}) {
    const description = item.description;
    const dateEntered = item.dateEntered;
    const priority = item.priority;
    const targetDate = item.targetDate;
    const completed = item.completed;

    let targetDateDisplay = targetDate;
    if (!targetDate) { targetDateDisplay = '—';}
    let completedDisplay = '';
    if (completed) {completedDisplay = '✓';}
    
    function handleKeyDown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        onOpen();
    }

    return (
            <li
                className="item-card"
                data-index={index}
                role="button"
                tabIndex={0}
                aria-label={completed ? `Edit the item ${description}, completed` : `Edit the item ${description}`}
                onClick={onOpen}
                onKeyDown={handleKeyDown}>
    
            <span className={`item-description ${completed ? 'line-through' : ''}`}> {description} </span>
            <span>{dateEntered}</span>
            <span>{priority}</span>
            <span>{targetDateDisplay}</span>
            <span>{completedDisplay}</span>

            <div className="flex gap-1">
                <IconButton
                    action="duplicate-item"
                    label={`Duplicate the item ${description}`}
                    glyph={DUPLICATE_GLYPH}
                    onClick={onDuplicate}
                />

                <IconButton
                    action="delete-item"
                    label={`Delete the item ${description}`}
                    glyph={DELETE_GLYPH}
                    danger
                    onClick={onDelete}
                />
            </div>
        </li>
    );
}