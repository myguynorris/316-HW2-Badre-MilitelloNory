import IconButton, { DUPLICATE_GLYPH, DELETE_GLYPH } from './IconButton.jsx';
import { DateUtil } from '../common/DateUtil.js';

export default function ItemCard({ item, index, onOpen, onDelete, onDuplicate, onDragStart, onDragEnd }) {
    const description = item.description;
    const dateEntered = DateUtil.format(item.dateEntered);
    const priority = item.priority;
    const targetDate = item.targetDate;
    const completed = item.completed;

    const targetDateDisplay = DateUtil.format(item.targetDate);
    let completedDisplay = '';
    if (completed) { completedDisplay = '✓'; }

    function handleKeyDown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        onOpen();
    }

    return (
        <li
            className="item-card item-grid mt-2.5 items-center gap-3 rounded-card
                        border-l-[0.3125rem] border-l-grey-300 bg-sbu-white
                        px-[0.875rem] py-2.5 shadow-card first:mt-0"
            data-index={index}
            role="button"
            tabIndex={0}
            draggable
            aria-label={completed ? `Edit the item ${description}, completed` : `Edit the item ${description}`}
            onClick={onOpen}
            onKeyDown={handleKeyDown}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}>

            <span className="area-handle" />

            <span
                className={`item-description area-description min-w-0 truncate font-semibold
                ${completed ? 'line-through' : ''}`}>
                {description}
            </span>

            <span className="area-entered text-center text-[0.875rem]">
                {dateEntered}
            </span>

            <span className="area-priority text-center">
                {priority}
            </span>

            <span className="area-target text-center">
                {targetDateDisplay}
            </span>

            <span className="area-completed text-center">
                {completedDisplay}
            </span>

            <div className="area-actions flex gap-1">
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